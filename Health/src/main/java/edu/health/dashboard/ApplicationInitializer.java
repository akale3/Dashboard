package edu.health.dashboard;

/**
 * Created by Aditya on 16-02-2017.
 */

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class ApplicationInitializer implements WebApplicationInitializer {

    public void onStartup(ServletContext container) throws ServletException {

        AnnotationConfigWebApplicationContext applicationContext = new AnnotationConfigWebApplicationContext();
        applicationContext.register(ApplicationConfig.class);

        ServletRegistration.Dynamic dispatcher = container.addServlet("api", new DispatcherServlet(applicationContext));

        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/api/*");
    }

}
