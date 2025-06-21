package com.fezchat.auth.service;

import com.fezchat.auth.dto.LoginRequest;
import com.fezchat.auth.dto.RegisterRequest;
import com.fezchat.auth.model.User;
import com.fezchat.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(RegisterRequest request) {
        User user = new User();
        user.setPhoneNumber(request.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return userRepository.save(user);
    }

    public boolean login(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByPhoneNumber(request.getPhoneNumber());
        return userOpt.isPresent() && passwordEncoder.matches(request.getPassword(), userOpt.get().getPassword());
    }
}