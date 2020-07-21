export const reviewBudget = (budget, remaining) => {
  let clase;

  if ( (budget / 4) > remaining ) {
    clase = 'alert--danger';
  }
  else if ( (budget / 2) > remaining ) {
    clase = 'alert--warning';
  }
  else {
    clase = 'alert--success';
  }

  return clase;
}