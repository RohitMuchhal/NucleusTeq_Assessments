package com.hrapp.service;

import com.hrapp.model.HrUser;
import com.hrapp.repository.HrUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private HrUserRepository hrUserRepository;

    public boolean validateHrUser(String email, String password) {
        HrUser user = hrUserRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

    public HrUser createHrUser(HrUser hrUser) {
        return hrUserRepository.save(hrUser);
    }
}