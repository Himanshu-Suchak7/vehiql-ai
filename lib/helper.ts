// Helper function to serialize car data
export const serializeCarData = (car, whislisted = false) => {
    return {
        ...car,
        price: car.price ? parseFloat(car.price.toString()) : 0,
        created_at: car.created_at?.toISOString(),
        updated_at: car.updated_at?.toISOString(),
        whislisted: whislisted,
    }
}

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);      
}