package com.rechargezone.rechargezone.services;
import java.util.*;

import org.postgresql.plugin.AuthenticationRequestType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.rechargezone.rechargezone.dto.userDto;
import com.rechargezone.rechargezone.dto.Response.AuthenticationResponse;
import com.rechargezone.rechargezone.model.Role;
// import com.rechargezone.rechargezone.mapper.UserMapper;
import com.rechargezone.rechargezone.model.adminDetails;
import com.rechargezone.rechargezone.model.userDetails;
import com.rechargezone.rechargezone.model.userMain;
import com.rechargezone.rechargezone.repository.adminDetailsRepository;
import com.rechargezone.rechargezone.repository.userDetailsRepository;
import com.rechargezone.rechargezone.repository.userRepository;

@Service
public class authenticationService {

    @Autowired
    private userRepository usermainrepo;


    @Autowired
    private userDetailsRepository userrepo;

    @Autowired
    private adminDetailsRepository adminrepo; 
    
    @Autowired
    private JwtService jwtService;

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public authenticationService(PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    // public void registerUser(userDto dto) {
    //     userMain userMain = new userMain();
    //     userMain.setEmail(dto.getEmail());
    //     userMain.setPassword(dto.getPassword());
    //     userMain.setRole(dto.getRole());
    //     // userMain = UserMapper.INSTANCE.dtoToUserMain(dto);
    //     usermainrepo.save(userMain);
    //     // Long userId = userMain.getId();

    //     if(dto.getRole().equals("admin")) {
    //         adminDetails admin = new adminDetails();
    //         // admin.setId(userId);
    //         admin.setFname(dto.getFname());
    //         admin.setLname(dto.getLname());
    //         admin.setPhone(dto.getPhone());
    //         admin.setUser(userMain);
    //         // adminDetails admin = UserMapper.INSTANCE.dtoToAdminDetails(dto);
    //         adminDetails result = adminrepo.save(admin);
    //         System.out.println(result);
    //     }
    //     else{
    //         userDetails user = new userDetails();
    //         // user.setId(userId);
    //         user.setFname(dto.getFname());
    //         user.setLname(dto.getLname());
    //         user.setPhone(dto.getPhone());
    //         user.setServiceProvider(dto.getServiceProvider());
    //         user.setAddress(dto.getAddress());
    //         user.setCity(dto.getCity());
    //         user.setUser(userMain);

    //         // userDetails user = UserMapper.INSTANCE.dtoToUserDetails(dto);
    //         userrepo.save(user);
    //     }
    // }

    public String register(userDto request) {
        System.out.println(request);
        if (request.getRole().equals("user")) {
                var user = userMain
                                .builder()
                                // .fname(request.getName())
                                .email(request.getEmail())
                                // .password(request.getPassword())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(request.getRole())
                                .build();
                Optional<userMain> existing = usermainrepo.findByEmail(request.getEmail());
                if (!existing.isEmpty()) {
                    return "Email Already exists";
                        // return AuthenticationResponse.builder()
                        //                 .token("Email Already exists")
                        //                 .build();
                }
                userMain savedUser = usermainrepo.save(user);
                userDetails userModel = new userDetails();
                userModel.setFname(request.getFname());
                userModel.setLname(request.getLname());
                userModel.setPhone(request.getPhone());
                userModel.setServiceProvider(request.getServiceProvider());
                userModel.setAddress(request.getAddress());
                userModel.setCity(request.getCity());
                userModel.setUser_id(savedUser.getId());
                userModel.setUser(savedUser);
                userrepo.save(userModel);
                return "added";
                // UserModel userModel = new UserModel();
                // userModel.setMobileNumber(request.getMobileNumber());
                // userModel.setUser(savedUser);
                // userModelRepository.save(userModel);
                // var jwtToken = jwtService.generateToken(user);

                // return AuthenticationResponse.builder()
                //                 .token(jwtToken)

                //                 .build();
        }
        var user = userMain
                        .builder()
                        // .name(request.getName())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(request.getRole())
                        //AuthenticationResponse.builder()
                        //                 .token("Email Already exists")
                        //                 .build();
                        .build();
        Optional<userMain> existing = usermainrepo.findByEmail(request.getEmail());
        if (!existing.isEmpty()) {
                // return AuthenticationResponse.builder()
                //                 .token("Email Already exists")
                //                 .build();
                return "email already exists";
        }
        userMain savedUser = usermainrepo.save(user);
        adminDetails admin = new adminDetails();
        admin.setAdmin_id(savedUser.getId());
        admin.setFname(request.getFname());
        admin.setLname(request.getLname());
        admin.setPhone(request.getPhone());
        admin.setUser(savedUser);
        adminrepo.save(admin);
        return "added successfully";
        // AdminModel adminModel = new AdminModel();
        // adminModel.setMobileNumber(request.getMobileNumber());
        // adminModel.setUser(savedUser);
        // adminModelRepository.save(adminModel);
        // var jwtToken = jwtService.generateToken(user);

        // return AuthenticationResponse.builder()
        //                 .token(jwtToken)

        //                 .build();
    }

    public AuthenticationResponse loginUser(userDto request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var userOptional = usermainrepo.findByEmail(request.getEmail());
        if (userOptional.isPresent()) {
            var user = userOptional.get();
            if (request.getRole().equals("admin") ) {
                return AuthenticationResponse.builder()
                                            .token("Invalid Credentials")
                                            .build();
            }
            if (request.getRole().equals("user")) {
                return AuthenticationResponse.builder()
                                            .token("Invalid Credentials")
                                            .build();
            }
            var jwttoken = jwtService.generateToken(user.getEmail());
            var userRole = user.getRole().toString().toLowerCase();
            return AuthenticationResponse.builder()
            .token(jwttoken)
            .role(userRole)
            .build();

        }
        return AuthenticationResponse.builder()
                                    .token("Invalid Credentials")
                                    .build();


        
    }

    // public userDto loginUser(userDto dto) {
    //     userMain userMain = new userMain();
    //     // userMain userMain = usermainrepo.findByEmail(dto.getEmail());
    //     if (userMain != null && userMain.getPassword().equals(dto.getPassword())) {
    //         userDto userDto = new userDto();
    //         userDto.setEmail(userMain.getEmail());
    //         userDto.setPassword(userMain.getPassword());
    //         userDto.setRole(userMain.getRole());
            
    //         if (userMain.getRole().equals("admin")) {
    //             userDto admin = new userDto();
    //             // adminDetails admin = adminrepo.findById(userMain.getId());
    //             userDto.setFname(admin.getFname());
    //             userDto.setLname(admin.getLname());
    //             userDto.setPhone(admin.getPhone());
    //         } else {
    //             userDetails user = userrepo.findById(userMain.getId());
    //             userDto.setFname(user.getFname());
    //             userDto.setLname(user.getLname());
    //             userDto.setPhone(user.getPhone());
    //             userDto.setServiceProvider(user.getServiceProvider());
    //             userDto.setAddress(user.getAddress());
    //             userDto.setCity(user.getCity());
    //         }
            
    //         return userDto;
    //     }
    //     return null;
    // }


    public List<userDto> getAllUsers() {
        // return userrepo.findAll();
        List<userDto> list = new ArrayList<>();
        List<userMain> userMainList = usermainrepo.findAll();

        for(userMain usermain : userMainList) {
            userDto dto = new userDto();
            dto.setEmail(usermain.getEmail());
            dto.setPassword(usermain.getPassword());
            dto.setRole(usermain.getRole().toString());
            // dto.setRole(usermain.getRole());
            // if(usermain.getRole().equals("admin")) 
        }

        
        // List<userMain> userMainList = usermainrepo.findAll();
        
        // for (userMain userMain : userMainList) {
        //     userDto dto = new userDto();
        //     dto.setEmail(userMain.getEmail());
        //     dto.setPassword(userMain.getPassword());
        //     dto.setRole(userMain.getRole());
            
        //     if (userMain.getRole().equals("admin")) {
        //         adminDetails admin = adminrepo.findById(userMain.getId());
        //         System.out.println(admin);
        //         // System.out.println(admin.getFname());
        //         // dto.setFname(admin.getFname());
        //         // dto.setLname(admin.getLname());
        //         // dto.setPhone(admin.getPhone());
        //     } else {
        //         userDetails user = userrepo.findById(userMain.getId());
        //         System.out.println(user);
        //         System.out.println(user.getFname());
                
        //         // dto.setFname(user.getFname());
        //         // dto.setLname(user.getLname());
        //         // dto.setPhone(user.getPhone());
        //         // dto.setServiceProvider(user.getServiceProvider());
        //         // dto.setAddress(user.getAddress());
        //         // dto.setCity(user.getCity());
        //     }
            
        //     list.add(dto);
        // }
        return list;
    }



    public List<adminDetails> getAllAdmins(long id) {
        return adminrepo.findById(id);
    }
}
