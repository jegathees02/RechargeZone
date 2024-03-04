package com.rechargezone.rechargezone.config;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.rechargezone.rechargezone.model.Role;
import com.rechargezone.rechargezone.model.userMain;

public class UserInfoUserDetails implements UserDetails {
    private String name;
    private String password;    
    private List<GrantedAuthority> authorities;

    // @SuppressWarnings("unlikely-arg-type")
    public UserInfoUserDetails(userMain userInfo) {
        name = userInfo.getEmail();
        password = userInfo.getPassword();
        authorities = Arrays.stream(userInfo.getRole().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
        // authorities = Arrays.stream(userInfo.getRole().split(","))
        //         .map(role -> {
        //             if (role.equals(Role.USER.toString())) {
        //                 return Role.USER;
        //             } else if (role.equals(Role.ADMIN.toString())) {
        //                 return Role.ADMIN;
        //             } else {
        //                 // Handle unknown roles here
        //                 throw new IllegalArgumentException("Unknown role: " + role);
        //             }
        //         })
        // authorities = ("USER","ADMIN").map(SimpleGrantedAuthority::new)
        //         // .map(SimpleGrantedAuthority::new)
        //         .collect(Collectors.toList());
    }
    

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    
}
