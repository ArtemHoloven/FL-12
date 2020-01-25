const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');
createFileTree(structure, rootNode);

function createFileTree(tree, node) {
  const parent = document.createElement('ul');
  node.appendChild(parent);
  for (let item of tree) {
    const child = document.createElement('li');
    parent.appendChild(child);
    const block = document.createElement('div');
    child.appendChild(block);
    const img = document.createElement('i');
    img.classList.add('material-icons');
    const title = document.createElement('span');
    block.appendChild(img);
    block.appendChild(title);
    title.innerHTML = item.title;
    if (item.folder) {
      block.classList.toggle('folder');
      img.innerHTML = 'folder';
      block.addEventListener('click', function() {
        if (img.innerHTML === 'folder') {
          img.innerHTML = 'folder_open';
        } else {
          img.innerHTML = 'folder';
        }
        child.querySelector('.closed').classList.toggle('open');
      });
      if (item.children) {
        createFileTree(item.children, child);
      } else {
        let emptyFolder = document.createElement('div');
        emptyFolder.classList.add('empty_folder', 'closed');
        emptyFolder.innerHTML = 'Folder is empty';
        child.appendChild(emptyFolder);
      }
    } else {
        child.classList.toggle('file');
        img.innerHTML = 'insert_drive_file';
    }
  }
  if (parent.parentNode !== rootNode) {
    parent.classList.toggle('closed');
  }
}