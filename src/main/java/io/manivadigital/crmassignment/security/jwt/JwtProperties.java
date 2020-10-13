package io.manivadigital.crmassignment.security.jwt;

public class JwtProperties {
    public static final String JWT_SECRET = "manivaSecretKey";
    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final int EXPIRATION_MS = 1000 * 60 * 60 * 24;
}
