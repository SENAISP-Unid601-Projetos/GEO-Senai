package br.com.example.senai_auto.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer{
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("*")
	        .allowedMethods("GET", "POST", "PUT", "DELETE") 
	        .allowedHeaders("*");
	}
}
