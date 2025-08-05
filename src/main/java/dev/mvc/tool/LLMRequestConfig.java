package dev.mvc.tool;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class LLMRequestConfig {
    public static final String LLM_IP = "http://1.201.18.118:8000";
  
    public LLMRequestConfig() {
      System.out.println("-> LLMRequestConfig created.");  
    }
    
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

