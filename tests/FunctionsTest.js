describe("Create an addition operation for the special calculator",function(){

  it("Defines canDrive", function(){
    expect(typeof canDrive).toBe("function");
  });

  it("should return `The person can drive the car!` when the age>18 and fuel>0", function(){

    let expectedResult = "The person can drive the car!";

    let actualResult = canDrive(19,5);

    expect(actualResult).toEqual(expectedResult);

  });

  it("should return `Cannot Drive` when the age<=18 and fuel<=0", function(){

    let expectedResult = "Cannot Drive !";

    let actualResult = canDrive(17,0);

    expect(actualResult).toEqual(expectedResult);

  });


  it("Defines getArea", function(){
    expect(typeof getArea).toBe("function");
  });

  it("should return the area of the given shape", function(){

    let expectedResult = 28.274333882308138;

    let actualResult = getArea('circle', 20, 20, 3);

    expect(actualResult).toEqual(expectedResult);

  });


});

