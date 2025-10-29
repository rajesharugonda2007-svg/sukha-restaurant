// This is a conceptual example using the popular Spring Boot framework
// for handling the backend part of your application.

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class OrderController {

    private final double DELIVERY_FEE = 50.00;

    // This method would receive the 'cart' data from the frontend's checkout function
    @PostMapping("/api/checkout")
    public OrderResponse processCheckout(@RequestBody Map<String, Integer> cartItems) {
        
        double calculatedSubtotal = 0;
        
        // In a real application, you would fetch menu prices from a database 
        // to prevent users from tampering with prices in the frontend!
        // For this example, we'll use placeholder logic.

        // Assume a service retrieves the real, secure prices
        Map<String, Double> secureMenuPrices = getSecureMenuPrices(); 

        for (Map.Entry<String, Integer> entry : cartItems.entrySet()) {
            String itemId = entry.getKey();
            Integer quantity = entry.getValue();

            // Find the secure price and calculate the subtotal
            Double price = secureMenuPrices.getOrDefault(itemId, 0.0);
            calculatedSubtotal += price * quantity;
        }

        double totalPayable = calculatedSubtotal > 0 ? calculatedSubtotal + DELIVERY_FEE : 0.0;

        if (totalPayable > 0) {
            // Logic to save the order to the database, process payment, etc.
            // ... orderService.saveOrder(cartItems, totalPayable);
            
            return new OrderResponse(
                "success", 
                "Order placed successfully! Total: ₹" + String.format("%.2f", totalPayable)
            );
        } else {
            return new OrderResponse(
                "failure", 
                "Your cart is empty."
            );
        }
    }
    
    // Placeholder function to simulate fetching secure prices from a database
    private Map<String, Double> getSecureMenuPrices() {
        // IDs are 1, 2, 3, 4, 5 in your JavaScript
        return Map.of(
            "1", 250.00,
            "2", 180.00,
            "3", 220.00,
            "4", 350.00,
            "5", 80.00
        );
    }
}

// Simple record/class to hold the response data
record OrderResponse(String status, String message) {}