

function createSticky(){
  var div = document.createElement("div");
  var note_list = document.getElementsByClassName('stickyNote');
  var div_id = "note-" + note_list.length;
  var text_id = "text-" + note_list.length;
  var note_content = document.getElementById("note-content").value;
  var note_colour = document.getElementById("colourselect").value;
  var innerHTML = '<div class="stickyNote"><button type="button" name="deleteButton" onclick="deleteSticky(\'' + note_list.length + '\')">delete</button> <button type="button" name="EditButton"onclick="editSticky(\'' + text_id + '\')">Edit</button><br><p id="\'' + text_id + '\'">' + note_content + '</p>'

  div.style.width = "200px";
  div.style.height = "200px";
  div.style.padding="10px";
  div.id = div_id
  div.style.background = note_colour;
  div.innerHTML = innerHTML

  document.getElementById("note-content").value = ""
  document.getElementById("main").appendChild(div);
  }

function deleteSticky(num)
{
  document.getElementById('note-'+num).remove();
}


function editSticky(id)
{
  var stickyId = '\'' + id + '\''
  var editValue = document.getElementById("note-content").value
  document.getElementById(stickyId).innerHTML = editValue;
}
