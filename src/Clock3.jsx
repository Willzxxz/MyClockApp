import React from "react";

// new Intl.DateTimeFormat().format

const Clock3 = () => {
  const options = {
      timeZone: "Europe/London",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    },
    formatter = new Intl.DateTimeFormat([], options);
  const ukTime = formatter.format(new Date());

  return (
    <div>
      <h1>UK TimeZone</h1>
      <p>{ukTime}</p>
    </div>
  );
};

export default Clock3;
