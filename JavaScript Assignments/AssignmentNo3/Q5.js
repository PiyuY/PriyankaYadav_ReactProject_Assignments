var fullName = {
    firstName: "Shreya",
    lastName: "Doe",
  };
  
  console.log(
    "Before initializing data the values are " +
      fullName.firstName +
      " " +
      fullName.lastName
  );
  
  fullName.lastName = "Ghoshal";
  console.log(
    "After initializing data the values are " +
      fullName.firstName +
      " " +
      fullName.lastName
  );
  
  console.log(
    "Accessing the middle name Before assigning " + fullName.middleName
  );
  
  fullName.middleName = "Sam";
  console.log("Accessing the middle name After assigning " + fullName.middleName);
  