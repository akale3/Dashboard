package edu.health.dashboard.controller;

import edu.health.dashboard.helper.CSVHelper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Aditya on 19-02-2017.
 */
@Controller
@RequestMapping("/home")
public class HomeController {

    @RequestMapping(value = "/getMortalityData", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<String[]> getMortalityData() {
        try {
            CSVHelper csvHelper = new CSVHelper();
            List<String[]> data = csvHelper.getParsedData("NCHS_-_Drug_Poisoning_Mortality__U.S._and_State_Trends__United_States__1999_2014.csv");
            return data;
        } catch (Exception e) {
            System.out.println("Error in getting data for Mortality in US");
        }
        return null;
    }
}
