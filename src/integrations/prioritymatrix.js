getProject = () => {
  var project = $('#itemDetail_projectName');
  console.log(project);
  if (project) {
    return project.textContent;
  }
  return null;
};

clockifyButton.render('#itemDetailContainer:not(.clockify)', {observe: true}, (elem) => {
  var item = $('textarea#itemDetail_itemName', elem);
  if (item) {
    var projectName = getProject();
    console.log('Project', projectName);
    var link = clockifyButton.createButton(item.textContent, projectName);
    $('#itemDetailContainer div:first-child').after(link);
  }
});
