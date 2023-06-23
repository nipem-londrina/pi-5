package com.eikaeika.pi5server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class Pi5ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(Pi5ServerApplication.class, args);
    }

}
