export type Business = {
  id:             number,            
  name:           string,
  phoneNumber?:     string,
  logo?:            string,
  category:       Category,        
  categoryId:     number,
  businessOwner:   BusinessOwner  
  businessOwnerId: number        
  appointments:    Appointment[]
  businessHours: BusinessHours[]
}

export type BusinessOwner = {
    id:       number       
    email:    string    
    password: string
    name:     string
    avatar?:   string,
    age:     number
    business: Business
  }


  export type Client = {
    id:          number
    name:         string
    avatar?:       string
    email:        string        
    password:     string
    phoneNumber:  string
    appointments: Appointment[]
  }


  export type Category = {
    id: number         
    name:       string
    services:   Service[]
    businesses: Business[]
  }
  
  export type Service = {
    id: number    
    name:        string
    duration:    string
    cateory:     Category   
    categoryId:  number
    appointment?: Appointment,
  }
  
  export type BusinessHours = {
    id:           number
    day:          string //monday
    openingHours: string
    closingHours: string
    business:     Business
    businessId:   number
  }
  
  export type Appointment = {
    id:         number      
    service:    Service  
    serviceId:  number     
    client:     Client   
    title:      string
    startDate:   string
    endDate:    string
    business:   Business
    businessId: number
    clientId:   number
  }
  