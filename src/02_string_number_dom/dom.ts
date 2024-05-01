console.clear();
console.log('In dem dom.ts');

const contentElement = document.getElementById('content');
if (contentElement) {
    contentElement.innerHTML = 'Hello World';
}