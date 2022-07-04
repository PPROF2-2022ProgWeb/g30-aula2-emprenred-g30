/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.emprendRed.Jwt;


import com.example.emprendRed.service.AppService;
import io.jsonwebtoken.ExpiredJwtException;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


public class JwtTokenFilter extends OncePerRequestFilter{
//private final static Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    AppService userServiceImpl;
    
    @Autowired
    private JwtUtils jwtUtil;
   
//    @Override
//    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain fc) throws ServletException, IOException {
//         try {
//            String token = getToken(req);
//            if(token != null && jwtProvider.validateToken(token)){
//                String username = jwtProvider.getUsernameFromToken(token);
//                UserDetails userDetails = userServiceImpl.loadUserByUsername(username);
//
//                UsernamePasswordAuthenticationToken auth =
//                        new UsernamePasswordAuthenticationToken(userDetails, null, null);
//                SecurityContextHolder.getContext().setAuthentication(auth);
//            }
//        } catch (Exception e){
//            logger.error("error en el método doFilter " + e.getMessage());
//        }
//        fc.doFilter(req, res);
//    }
//
//    private String getToken(HttpServletRequest request){
//        String header = request.getHeader("Authorization");
//        if(header != null && header.startsWith("Bearer"))
//            return header.replace("Bearer ", "");
//        return null;
//    }
//    
//        @Autowired
//    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException{

        final String authorizationHeader = request.getHeader("Authorization");
        String username = null;
        String jwt = null;

        if(authorizationHeader == null){
            filterChain.doFilter(request,response);
            return;
        }

        if(authorizationHeader.startsWith("Bearer ")){
            jwt = authorizationHeader.substring(7);
            try{
                username = jwtUtil.extractUsername(jwt);
            } catch (ExpiredJwtException ex){
                request.setAttribute("expired", ex.getMessage());
            }

        }

        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){
            UserDetails userDetails = userServiceImpl.loadUserByUsername(username);

            if(jwtUtil.validateToken(jwt, userDetails)){
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, null);
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }

        filterChain.doFilter(request, response);
    }
    
}