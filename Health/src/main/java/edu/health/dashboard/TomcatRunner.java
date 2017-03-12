package edu.health.dashboard;

import org.apache.catalina.startup.Tomcat;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * Created by Aditya on 15-02-2017.
 */
public class TomcatRunner {

    private static Tomcat server;
    private static Properties properties;
    public static ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();

    public static void main(String[] args) throws Exception {

        loadProperties("application.properties");

        String war = new File(".").getAbsolutePath() + properties.getProperty("war");
        String context = properties.getProperty("context");
        server = new Tomcat();
        String webPort = properties.getProperty("port");
        server.setPort(Integer.valueOf(webPort));

        server.addWebapp(context, war);

        server.start();
        server.getServer().await();
    }

    private static void loadProperties(String propertyFileName) {
        properties = new Properties();
        try (InputStream fileInputStream = systemClassLoader.getResourceAsStream("application.properties")) {
            properties.load(fileInputStream);
        } catch (IOException e) {
            System.out.println("Unable to find " + propertyFileName + " file.");
        }
    }
}
