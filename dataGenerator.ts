// dataGenerator.ts
export function generateRandomInput() {
    return {
        companyName: 'Company ' + Math.random().toString(36).substring(7),
        firstName: 'FirstName ' + Math.random().toString(36).substring(7),
        lastName: 'LastName ' + Math.random().toString(36).substring(7),
        generalProfTitle: 'Title ' + Math.random().toString(36).substring(7),
        personalTitle: 'Mr./Ms. ' + Math.random().toString(36).substring(7),
        annualRevenue: Math.floor(Math.random() * 1000000).toString(),
        departmentName: 'Department ' + Math.random().toString(36).substring(7),
        primaryPhoneNumber: '1234567890',
    };
}
