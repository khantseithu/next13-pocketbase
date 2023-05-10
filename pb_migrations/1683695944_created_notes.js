migrate((db) => {
  const collection = new Collection({
    "id": "8fien6zlgboovef",
    "created": "2023-05-10 05:19:04.923Z",
    "updated": "2023-05-10 05:19:04.923Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wlv34lgu",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8fien6zlgboovef");

  return dao.deleteCollection(collection);
})
