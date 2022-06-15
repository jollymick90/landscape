import template from 'lodash/template';

const outputElement = document.getElementById('output');
if (outputElement) {
    const compiled = template(`
    <h1><%- heading %></h1>
    Current date and time: <%- dateTimeString %>
  `.trim());
    outputElement.innerHTML = compiled({
        heading: 'Jolly Mick',
        dateTimeString: new Date().toISOString(),
    });
}