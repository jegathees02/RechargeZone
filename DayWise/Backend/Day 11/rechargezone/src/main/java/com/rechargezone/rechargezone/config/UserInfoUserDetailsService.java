package com.rechargezone.rechargezone.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.rechargezone.rechargezone.model.userMain;
import com.rechargezone.rechargezone.repository.userRepository;

@Component
public class UserInfoUserDetailsService implements UserDetailsService {

    @Autowired
    private userRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<userMain> userInfo = repository.findByEmail(username);
        return userInfo.map(UserInfoUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + username));

    }
}
