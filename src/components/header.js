const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerElement = document.createElement('div');
  headerElement.classList = "header";
  const spanElement1 = document.createElement('span');
  spanElement1.classList = "date";
  spanElement1.textContent = date;
  const titleElement = document.createElement('h1');
  titleElement.textContent = title;
  const spanElement2 = document.createElement('span');
  spanElement2.classList = "temp";
  spanElement2.textContent = temp;

  return {
  headerElement,
  spanElement1,
  titleElement,
  spanElement2
  }


  
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const parentElement =  document.querySelector(selector);
  console.log(parentElement)
  parentElement.appendChild(Header('Denver', '1/25/2020', '98').headerElement);
  parentElement.appendChild(Header('Denver', '1/25/2020', '98').spanElement1);
  parentElement.appendChild(Header('Denver', '1/25/2020', '98').titleElement);
  parentElement.appendChild(Header('Denver', '1/25/2020', '98').spanElement2);



}

export { Header, headerAppender }
