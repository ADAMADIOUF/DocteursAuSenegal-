import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: bcrypt.hashSync('123456', 10),
    image: 'https://via.placeholder.com/150',
    address: {
      street: '456 Oak St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    gender: 'Male',
    dob: '1985-07-15',
    phone: '123-456-7890',
    isAdmin: true, // Mark as admin
    isDoctor: false, // Mark as not a doctor
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    password: bcrypt.hashSync('123456', 10),
    image: 'https://via.placeholder.com/150',
    address: {
      street: '789 Pine St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    gender: 'Female',
    dob: '1990-03-22',
    phone: '987-654-3210',
    isAdmin: false, // Mark as not an admin
    isDoctor: true, // Mark as a doctor
  },
]

export default users
