package com.rechargezone.rechargezone.mapper;

import com.rechargezone.rechargezone.dto.userDto;
import com.rechargezone.rechargezone.model.adminDetails;
import com.rechargezone.rechargezone.model.userDetails;
import com.rechargezone.rechargezone.model.userMain;

public class UserMapper {
    public static userMain mapToUserMain(userDto dto) {
        userMain user = new userMain();
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        // userMain.Role = dto.getRole() == "user" ? userMain.Role.USER : userMain.Role.ADMIN;
        return user;
    }

    public static userDetails mapToUserDetails(userDto dto) {
        userDetails user = new userDetails();
        user.setFname(dto.getFname());
        user.setLname(dto.getLname());
        user.setPhone(dto.getPhone());
        user.setServiceProvider(dto.getServiceProvider());
        user.setAddress(dto.getAddress());
        user.setCity(dto.getCity());

        return user;
    }

    public static adminDetails mapToAdminDetails(userDto dto) {
        adminDetails admin = new adminDetails();
        admin.setFname(dto.getFname());
        admin.setLname(dto.getLname());
        admin.setPhone(dto.getPhone());
        // admin.setServiceProvider(dto.getServiceProvider());
        // admin.setAddress(dto.getAddress());
        // admin.setCity(dto.getCity());

        return admin;
    }
    


}
