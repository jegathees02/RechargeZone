package com.rechargezone.rechargezone.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String role;
    private String fname;
    private String lname;
    private String email;
    private String phone;
    private String serviceProvider;

    
}
