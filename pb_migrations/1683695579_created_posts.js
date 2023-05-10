migrate((db) => {
  const collection = new Collection({
    "id": "61wb92iezx5m96r",
    "created": "2023-05-10 05:12:59.855Z",
    "updated": "2023-05-10 05:12:59.855Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nqtqdaeb",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("61wb92iezx5m96r");

  return dao.deleteCollection(collection);
})
