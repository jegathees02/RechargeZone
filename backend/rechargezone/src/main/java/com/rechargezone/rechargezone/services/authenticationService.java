package com.rechargezone.rechargezone.services;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargezone.rechargezone.dto.userDto;
import com.rechargezone.rechargezone.mapper.UserMapper;
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
        userMain = UserMapper.INSTANCE.dtoToUserMain(dto);
        usermainrepo.save(userMain);

        if("admin".equals(dto.getRole())) {
            adminDetails admin = UserMapper.INSTANCE.dtoToAdminDetails(dto);
            adminrepo.save(admin);
        }
        else{
            userDetails user = UserMapper.INSTANCE.dtoToUserDetails(dto);
            userrepo.save(user);
        }
    }

    public List<userDto> getAllUsers(){
        List<userDto> list = new ArrayList<>();


        return list;

    }
    
}
