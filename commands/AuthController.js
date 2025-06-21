package com.fezchat.auth.controller;

import com.fezchat.auth.dto.LoginRequest;
import com.fezchat.auth.dto.RegisterRequest;
import com.fezchat.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("User registered");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        boolean success = authService.login(request);
        return success ? ResponseEntity.ok("Login success") :
                         ResponseEntity.status(401).body("Login failed");
    }
}