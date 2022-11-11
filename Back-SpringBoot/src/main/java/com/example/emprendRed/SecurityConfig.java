
package com.example.emprendRed;

import com.example.emprendRed.Jwt.JwtEntryPoint;
import com.example.emprendRed.Jwt.JwtTokenFilter;
import com.example.emprendRed.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtEntryPoint jwtEntryPoint;

    @Autowired
    private AppService userService;

    @Bean
    public BCryptPasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }


    @Override
    public void configure (AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(userDetailsService).passwordEncoder(encoder());
    }

    @Override
    public void configure(HttpSecurity http) throws Exception{
        http
                .cors(withDefaults())
                .csrf().disable()
                .httpBasic()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("static/**").permitAll()
                .antMatchers("/v2/api-docs/**").permitAll()
                .antMatchers("/swagger-ui/**").permitAll()
                .antMatchers("/swagger-resources/**").permitAll()
                .antMatchers("/swagger-ui.html").permitAll()
                .antMatchers("/swagger-ui/index.html/**").permitAll()
                .antMatchers("/webjars/**").permitAll()
                .antMatchers("/registro").permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers("/api/carrito/**").permitAll()
                .antMatchers("/api/productos/**").permitAll()
                .antMatchers("/api/productos/**/file").permitAll()
                .antMatchers("/api/tipoproducto/**").permitAll()
                .antMatchers("/users/**").permitAll()
                .antMatchers("/users").permitAll()
                .anyRequest().authenticated()
                .and().addFilterBefore(jwtTokenFilter(),UsernamePasswordAuthenticationFilter.class);

    }
    @Bean
    public JwtTokenFilter jwtTokenFilter(){
        return new JwtTokenFilter();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return super.userDetailsService();
    }

//    @Bean
// CorsConfigurationSource corsConfigurationSource() {
//  CorsConfiguration cc = new CorsConfiguration();
//                cc.setAllowedHeaders(Arrays.asList("Origin,Accept", "X-Requested-With", "Content-Type", "Access-Control-Request-Method", "Access-Control-Request-Headers","Authorization"));
//                cc.setExposedHeaders(Arrays.asList("Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
//  cc.setAllowedOrigins(Arrays.asList("http://localhost:5500"));
//  cc.setAllowedMethods(Arrays.asList("GET", "POST", "OPTIONS", "PUT","PATCH"));
//                cc.addAllowedOrigin("http://localhost:5500");
//                cc.setMaxAge(java.time.Duration.ZERO);
//                cc.setAllowCredentials(Boolean.TRUE);
//  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//  source.registerCorsConfiguration("/**", cc);
//  return source;
// }
//
}