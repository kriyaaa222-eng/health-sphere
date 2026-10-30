/* HealthSphere sample data for local demonstration */
window.HS_DATA = {
  hospitals: [
    {id:"h1",name:"GreenLife Multispeciality Hospital",speciality:"Multispeciality",location:"Peelamedu, Coimbatore",rating:"4.8",phone:"+91 98765 43210",icu:4},
    {id:"h2",name:"CityCare Medical Centre",speciality:"General & Emergency",location:"Gandhipuram, Coimbatore",rating:"4.6",phone:"+91 98765 43211",icu:2},
    {id:"h3",name:"WellSpring Heart Institute",speciality:"Cardiology",location:"Avinashi Road, Coimbatore",rating:"4.9",phone:"+91 98765 43212",icu:1}
  ],
  doctors: [
    {id:"d1",name:"Dr. Ananya Raman",speciality:"General Physician",hospital:"GreenLife Multispeciality Hospital",fee:400,slots:["10:00 AM","11:30 AM","04:00 PM"]},
    {id:"d2",name:"Dr. Karthik Menon",speciality:"Cardiologist",hospital:"WellSpring Heart Institute",fee:700,slots:["09:30 AM","01:00 PM","05:30 PM"]},
    {id:"d3",name:"Dr. Meera Krishnan",speciality:"Dermatologist",hospital:"CityCare Medical Centre",fee:500,slots:["10:30 AM","12:00 PM","03:30 PM"]},
    {id:"d4",name:"Dr. Rahul Dev",speciality:"Paediatrician",hospital:"GreenLife Multispeciality Hospital",fee:450,slots:["09:00 AM","02:00 PM","06:00 PM"]}
  ],
  packages: [
    {id:"p1",name:"Basic Wellness Check",detail:"CBC, blood sugar, urine routine",price:799},
    {id:"p2",name:"Complete Body Checkup",detail:"60+ parameters, liver, kidney, lipid profile",price:2499},
    {id:"p3",name:"Diabetes Screening",detail:"Fasting glucose, HbA1c, post-meal glucose",price:599},
    {id:"p4",name:"Heart Health Screen",detail:"Lipid profile, ECG and consultation",price:1299}
  ],
  helpers: [
    {id:"u-helper",name:"Arun Kumar",skill:"Hospital visit assistance",rating:"4.9",available:true},
    {id:"u-helper2",name:"Priya S",skill:"Elder care & medicine pickup",rating:"4.8",available:true},
    {id:"u-helper3",name:"Mohan Raj",skill:"Appointment assistance",rating:"4.7",available:true}
  ]
};