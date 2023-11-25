package sistemacademico.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class DatabaseTestApplication {

    public static void main(String[] args) {
        // Run the Spring Boot application
        ApplicationContext context = SpringApplication.run(DatabaseTestApplication.class, args);

        // Get a JdbcTemplate bean to execute SQL queries
        JdbcTemplate jdbcTemplate = context.getBean(JdbcTemplate.class);

        // Test the database connection
        try {
            // Execute a simple query (e.g., select current database user)
            String currentUserQuery = "SELECT CURRENT_USER()";
            String currentUser = jdbcTemplate.queryForObject(currentUserQuery, String.class);

            System.out.println("Connected to the database. Current user: " + currentUser);
        } catch (Exception e) {
            System.err.println("Error testing the database connection: " + e.getMessage());
        }
    }
}
