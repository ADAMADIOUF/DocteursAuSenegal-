const doctors = [
  {
    name: 'Dr. John Doe',
    image:
      'https://i.pinimg.com/236x/6c/6e/d7/6c6ed7f4011b7f926b3f1505475aba16.jpg',
    specialty: 'General Medicine',
    degree: 'MD',
    experience: 5,
    about:
      'Experienced general practitioner with a passion for holistic healthcare.',
    available: {
      days: ['Monday', 'Wednesday', 'Friday'],
      times: '9:00 AM - 4:00 PM',
    },
    fees: 100,
    address: {
      street: '123 Main St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-11-08',
    slots_booked: 20,
  },
  {
    name: 'Dr. Sarah Lee',
    image:
      'https://i.pinimg.com/236x/80/6a/3d/806a3d3e057a3f061cabd1d06dfa9d89.jpg',
    specialty: 'Pediatrics',
    degree: 'MBBS',
    experience: 8,
    about: 'Pediatrician with expertise in child health and development.',
    available: {
      days: ['Tuesday', 'Thursday'],
      times: '8:00 AM - 3:00 PM',
    },
    fees: 120,
    address: {
      street: '456 Oak St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-11-01',
    slots_booked: 15,
  },
  {
    name: 'Dr. Michael Brown',
    image:
      'https://i.pinimg.com/236x/61/36/fb/6136fb8bd0b2eccb6ab75d54bf6e7948.jpg',
    specialty: 'Orthopedics',
    degree: 'DO',
    experience: 12,
    about: 'Orthopedic surgeon specializing in joint and bone care.',
    available: {
      days: ['Monday', 'Wednesday'],
      times: '10:00 AM - 5:00 PM',
    },
    fees: 150,
    address: {
      street: '789 Pine St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-10-25',
    slots_booked: 30,
  },
  {
    name: 'Dr. Emily Adams',
    image:
      'https://i.pinimg.com/236x/b0/9f/6b/b09f6b9d0849f841d872ca254b6cf7f6.jpg',
    specialty: 'Dermatology',
    degree: 'MD',
    experience: 6,
    about:
      'Dermatologist specializing in skin health and cosmetic dermatology.',
    available: {
      days: ['Monday', 'Thursday'],
      times: '9:00 AM - 1:00 PM',
    },
    fees: 110,
    address: {
      street: '101 Elm St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-11-02',
    slots_booked: 10,
  },
  {
    name: 'Dr. William Carter',
    image:
      'https://i.pinimg.com/236x/83/d0/6a/83d06aae395a6a4f3bb1f8343bda129a.jpg',
    specialty: 'Cardiology',
    degree: 'MD',
    experience: 15,
    about:
      'Experienced cardiologist focused on heart disease prevention and treatment.',
    available: {
      days: ['Tuesday', 'Friday'],
      times: '8:00 AM - 4:00 PM',
    },
    fees: 200,
    address: {
      street: '201 Cedar St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-09-30',
    slots_booked: 25,
  },
  {
    name: 'Dr. Jessica Wilson',
    image:
      'https://i.pinimg.com/236x/c9/e0/b5/c9e0b5e45aad1de8e27b25ec6ce3cd27.jpg',
    specialty: 'Neurology',
    degree: 'MD',
    experience: 10,
    about: 'Neurologist specializing in brain disorders and neurological care.',
    available: {
      days: ['Monday', 'Wednesday'],
      times: '9:00 AM - 5:00 PM',
    },
    fees: 180,
    address: {
      street: '303 Maple St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-10-10',
    slots_booked: 35,
  },
  {
    name: 'Dr. Robert Turner',
    image:
      'https://i.pinimg.com/236x/10/92/99/1092997edcfa953996a4a7f709732e44.jpg',
    specialty: 'Ophthalmology',
    degree: 'MD',
    experience: 7,
    about: 'Ophthalmologist specializing in eye surgery and vision care.',
    available: {
      days: ['Tuesday', 'Friday'],
      times: '9:00 AM - 3:00 PM',
    },
    fees: 130,
    address: {
      street: '404 Birch St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-09-22',
    slots_booked: 12,
  },
  {
    name: 'Dr. Olivia Moore',
    image:
      'https://i.pinimg.com/236x/e3/71/dd/e371ddd4f1095da4605ab5e9048248b1.jpg',
    specialty: 'Endocrinology',
    degree: 'MD',
    experience: 9,
    about: 'Endocrinologist specializing in hormone-related health issues.',
    available: {
      days: ['Monday', 'Thursday'],
      times: '8:30 AM - 2:30 PM',
    },
    fees: 140,
    address: {
      street: '505 Birchwood Ave',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-08-18',
    slots_booked: 18,
  },
  {
    name: 'Dr. Henry Clark',
    image:
      'https://i.pinimg.com/236x/d2/7b/28/d27b284d45147b17d8fedd8fd3999a05.jpg',
    specialty: 'Gastroenterology',
    degree: 'MD',
    experience: 14,
    about: 'Gastroenterologist focusing on digestive and liver diseases.',
    available: {
      days: ['Wednesday', 'Friday'],
      times: '9:00 AM - 4:00 PM',
    },
    fees: 150,
    address: {
      street: '606 Aspen St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-09-13',
    slots_booked: 22,
  },
  {
    name: 'Dr. Natalie Scott',
    image:
      'https://i.pinimg.com/236x/e1/ad/63/e1ad63235ce8a7d9ac8846d50056eb0e.jpg',
    specialty: 'Gynecology',
    degree: 'MD',
    experience: 11,
    about:
      "Experienced gynecologist specializing in women's health and wellness.",
    available: {
      days: ['Tuesday', 'Thursday'],
      times: '9:00 AM - 2:00 PM',
    },
    fees: 160,
    address: {
      street: '707 Oakwood St',
      city: 'Minot',
      state: 'ND',
      postalCode: '58701',
      country: 'USA',
    },
    date: '2024-08-29',
    slots_booked: 28,
  },
]

export default doctors
