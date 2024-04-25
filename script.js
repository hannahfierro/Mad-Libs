document.getElementById('generateStory').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const adjective1 = document.getElementById('adjective1').value;
    const adjective2 = document.getElementById('adjective2').value;
    const verb = document.getElementById('verb').value;
    const noun = document.getElementById('noun').value;
    const adverb = document.getElementById('adverb').value;
  
    const story = `Once upon a time ${name} lived far far away and was very ${adjective1} Ready to be leave home today and go explore the village.  ${name} felt ${adjective2} and ${adverb} free. ${name} couldn't help but ${verb} and offer her a ${noun}.`;
  
    document.getElementById('storyOutput').innerHTML = `<p>${story}</p>`;
  });
  