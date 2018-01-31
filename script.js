
var movies = [
    {
        id:'1',
        covers: './covers/inter.jpg',
        title: 'Interstellar',
        desc: 'Film podróży kosmicznej' 
    }, 
    {
        id:'2',
        covers: './covers/stg.jpg',
        title: 'Stargate',
        desc: 'Film o gwiezdnych wrotach'
    },
    {
        id:'3',
        covers: './covers/stid.jpg',
        title: 'Star Trek Into Darkness',
        desc: 'Film o przygodach USS Enterprise'
    },
    {
        id:'4',
        covers: './covers/be.jpg',
        title: 'Efekt motyla',
        desc: 'Film o podróżach w czasie'
    },
    {
        id:'5',
        covers: './covers/arrival.jpg',
        title: 'Arrival',
        desc: 'Film o poznawaniu nieznanego'
    },
    {
        id:'6',
        covers: './covers/stga.jpg',
        title: 'Stargate Atlantis',
        desc: 'Film o gwiezdnych wrotach i Atlantydzie'
    },
    {
        id:'7',
        covers: './covers/tr.jpg',
        title: 'The Road',
        desc: 'Film postapokaliptyczny'
    }

]
        

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id, className: 'container'},
        React.createElement('img',{src:movie.covers}),
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)
      );
  });

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));