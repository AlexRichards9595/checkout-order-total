describe("Chechout", function(){
  it("should pass", function(){
    expect(true).toBe(true);
  });
  it("should an item to checked when scanned", function(){
    scan("soup");
    expect(checked[0].name).toBe("soup");
  });
  it("should get the item price when scanned", function(){
    scan("soup");
    expect(checked[0].price).toBe(.89);
  });
});
