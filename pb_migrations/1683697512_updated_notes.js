migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8fien6zlgboovef")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxdxpfg3",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8fien6zlgboovef")

  // remove
  collection.schema.removeField("mxdxpfg3")

  return dao.saveCollection(collection)
})
