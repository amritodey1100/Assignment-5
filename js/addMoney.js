document
  .getElementById("first-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const firstAddMoney = document.getElementById("first-input-money").value;

    if (isNaN(firstAddMoney) || firstAddMoney.trim() === "") {
      alert("Please enter a valid number for the donation amount.");
    } else {
      const firstBalance =
        document.getElementById("first-card-money").innerText;

      const firstBalanceNumber = parseFloat(firstBalance);

      const firstInputMoneyNumber = parseFloat(firstAddMoney);

      const firstNewBalance = firstBalanceNumber + firstInputMoneyNumber;

      document.getElementById("first-card-money").innerText = firstNewBalance;

      const accountBalance =
        document.getElementById("account-balance").innerText;

      const mainBalance = parseFloat(accountBalance);

      const mainBalanceNumber = mainBalance - firstInputMoneyNumber;

      document.getElementById("account-balance").innerText = mainBalanceNumber;
      const firstThingName = document.getElementById("first-title").innerText;

      const currentDateTime = new Date();
      const formattedDateTime = currentDateTime.toLocaleString();

      const p = document.createElement("p");
      p.innerText = `Added: ${firstInputMoneyNumber} at ${firstThingName} on ${formattedDateTime} `;
      p.className =
        "bg-white p-4 rounded-lg shadow-md mb-4 text-gray-800 text-center mb-[6900px] ";

      document.getElementById("history-section").appendChild(p);
    }
  });

document
  .getElementById("second-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const secondAddMoney = document.getElementById("second-input-money").value;

    if (isNaN(secondAddMoney) || secondAddMoney.trim() === "") {
      alert("Please enter a valid number for the donation amount.");
    } else {
      const secondBalance =
        document.getElementById("second-card-money").innerText;

      const secondBalanceNumber = parseFloat(secondBalance);

      const secondInputMoneyNumber = parseFloat(secondAddMoney);

      const secondNewBalance = secondBalanceNumber + secondInputMoneyNumber;

      document.getElementById("second-card-money").innerText = secondNewBalance;
      const accountBalance =
        document.getElementById("account-balance").innerText;

      const mainBalance = parseFloat(accountBalance);

      const mainBalanceNumber = mainBalance - secondInputMoneyNumber;

      document.getElementById("account-balance").innerText = mainBalanceNumber;
    }
  });

document
  .getElementById("third-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const thirdAddMoney = document.getElementById("third-input-money").value;

    if (isNaN(thirdAddMoney) || thirdAddMoney.trim() === "") {
      alert("Please enter a valid number for the donation amount.");
    } else {
      const thirdBalance =
        document.getElementById("third-card-money").innerText;

      const thirdBalanceNumber = parseFloat(thirdBalance);

      const thirdInputMoneyNumber = parseFloat(thirdAddMoney);

      const thirdNewBalance = thirdBalanceNumber + thirdInputMoneyNumber;

      document.getElementById("third-card-money").innerText = thirdNewBalance;
      const accountBalance =
        document.getElementById("account-balance").innerText;

      const mainBalance = parseFloat(accountBalance);

      const mainBalanceNumber = mainBalance - thirdInputMoneyNumber;

      document.getElementById("account-balance").innerText = mainBalanceNumber;
    }
  });
