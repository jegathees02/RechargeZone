package com.rechargezone.rechargezone.services;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargezone.rechargezone.dto.userDto;
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

    public void registerUser(userDto dto) {
        userMain userMain = new userMain();
        userMain.setEmail(dto.getEmail());
        userMain.setPassword(dto.getPassword());
        userMain.setRole(dto.getRole());
        // userMain = UserMapper.INSTANCE.dtoToUserMain(dto);
        usermainrepo.save(userMain);
        // Long userId = userMain.getId();

        if("admin".equals(dto.getRole())) {
            adminDetails admin = new adminDetails();
            // admin.setId(userId);
            admin.setFname(dto.getFname());
            admin.setLname(dto.getLname());
            admin.setPhone(dto.getPhone());
            // adminDetails admin = UserMapper.INSTANCE.dtoToAdminDetails(dto);
            adminrepo.save(admin);
        }
        else{
            userDetails user = new userDetails();
            // user.setId(userId);
            user.setFname(dto.getFname());
            user.setLname(dto.getLname());
            user.setPhone(dto.getPhone());
            user.setServiceProvider(dto.getServiceProvider());
            user.setAddress(dto.getAddress());
            user.setCity(dto.getCity());

            // userDetails user = UserMapper.INSTANCE.dtoToUserDetails(dto);
            userrepo.save(user);
        }
    }

    public userDto loginUser(userDto dto) {
        userMain userMain = usermainrepo.findByEmail(dto.getEmail());
        if (userMain != null && userMain.getPassword().equals(dto.getPassword())) {
            userDto userDto = new userDto();
            userDto.setEmail(userMain.getEmail());
            userDto.setPassword(userMain.getPassword());
            userDto.setRole(userMain.getRole());
            
            if ("admin".equals(userMain.getRole())) {
                adminDetails admin = adminrepo.findById(userMain.getId());
                userDto.setFname(admin.getFname());
                userDto.setLname(admin.getLname());
                userDto.setPhone(admin.getPhone());
            } else {
                userDetails user = userrepo.findById(userMain.getId());
                userDto.setFname(user.getFname());
                userDto.setLname(user.getLname());
                userDto.setPhone(user.getPhone());
                userDto.setServiceProvider(user.getServiceProvider());
                userDto.setAddress(user.getAddress());
                userDto.setCity(user.getCity());
            }
            
            return userDto;
        }
        return null;
    }


    public List<userDto> getAllUsers() {
        List<userDto> list = new ArrayList<>();
        
        List<userMain> userMainList = usermainrepo.findAll();
        
        for (userMain userMain : userMainList) {
            userDto dto = new userDto();
            dto.setEmail(userMain.getEmail());
            dto.setPassword(userMain.getPassword());
            dto.setRole(userMain.getRole());
            
            if ("admin".equals(userMain.getRole())) {
                adminDetails admin = adminrepo.findById(userMain.getId());
                dto.setFname(admin.getFname());
                dto.setLname(admin.getLname());
                dto.setPhone(admin.getPhone());
            } else {
                userDetails user = userrepo.findById(userMain.getId());
                dto.setFname(user.getFname());
                dto.setLname(user.getLname());
                dto.setPhone(user.getPhone());
                dto.setServiceProvider(user.getServiceProvider());
                dto.setAddress(user.getAddress());
                dto.setCity(user.getCity());
            }
            
            list.add(dto);
        }
        
        return list;
    }

    
    
}
