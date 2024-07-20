package com.springauth.system.config;

import org.springframework.cache.CacheManager;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CacheConfig {
    
    @Bean
    public CacheManager cacheUserManager() {
        return new ConcurrentMapCacheManager("users", "transactions");
    }
}
