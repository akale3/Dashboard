package edu.health.dashboard.helper;

import au.com.bytecode.opencsv.CSVReader;
import edu.health.dashboard.TomcatRunner;

import java.io.File;
import java.io.FileReader;
import java.util.List;

/**
 * Created by Aditya on 19-02-2017.
 */
public class CSVHelper {
    public List<String[]> getParsedData(String fileName) throws Exception {
        try {
            CSVReader reader = new CSVReader(
                    new FileReader(new File(TomcatRunner.systemClassLoader.getResource(fileName).getPath())),
                    ',',
                    '"',
                    1
            );
            return reader.readAll();
        } catch (Exception e) {
            System.out.println("Error in parsing data");
            throw e;
        }
    }
}
