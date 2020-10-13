package io.manivadigital.crmassignment.security;


import io.manivadigital.crmassignment.user.User;
import io.manivadigital.crmassignment.user.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserPrincipleService implements UserDetailsService {

    private UserRepository userRepository;

    public UserPrincipleService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //email is defined as username for authentication
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + username));

        return new UserPrinciple(user);
    }

}
