import json
from pymongo import MongoClient

def main():
    # 1) Load the JSON data
    with open("corrected_merged_gita_shloks.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    # 2) Connect to MongoDB
    client = MongoClient("mongodb://127.0.0.1:27017/")
    db = client["hindu_scriptures"]
    collection = db["bhagavad_gita"]

    # 3) Update each document where verse == id
    for item in data:
        doc_id = item["id"]  # e.g., "1.4 – 1.6"
        sanskrit = item["sanskrit"]
        transliteration = item["transliteration"]

        # Perform the update
        result = collection.update_one(
            {"verse": doc_id},
            {"$set": {"shlok": sanskrit, "transliteration": transliteration}}
        )

        print(
            f'ID: "{doc_id}" → Matched: {result.matched_count}, Modified: {result.modified_count}'
        )

    client.close()
    print("Done merging shloks!")

if __name__ == "__main__":
    main()
