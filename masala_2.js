let zapchastlar = [
    { nomi: "svecha", narxi: 30000, carModel: "spark" },
    { nomi: "akkumlyator", narxi: 500000, carModel: "spark" },
    { nomi: "svecha", narxi: 35000, carModel: "nexia" },
    { nomi: "babina", narxi: 450000, carModel: "spark" },
  ];

  let sum = 0;
  zapchastlar.forEach((zapchast) => {
    if (zapchast.carModel === "spark") {
      sum += zapchast.narxi;
    }
  });
  console.log(sum);
