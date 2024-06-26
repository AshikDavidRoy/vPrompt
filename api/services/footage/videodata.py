async def update_footage(
    db,
    timestamp,
    footage_id,
    class_name,
    object_box,
    text_data="",
):
    if text_data == "":
        video_data_result = await db.videodata.find_many(
            where={
                "timestamp": timestamp,
                "text_data": text_data,
                "footage_id": footage_id,
            }
        )
    else:
        video_data_result = await db.videodata.find_many(
            where={
                "timestamp": timestamp,
                "class_name": class_name,
                "footage_id": footage_id,
            }
        )

    if len(video_data_result) == 0:
        await db.videodata.create(
            {
                "timestamp": timestamp,
                "text_data": text_data,
                "class_name": class_name,
                "object_box": object_box,
                "footage": {"connect": {"id": footage_id}},
            }
        )


async def search_by_footage(db, footage_id):
    return await db.videodata.find_many(
        where={
            "footage_id": footage_id,
        },
        take=10,
    )


async def search_by_class(db, class_name, footage_id):
    return await db.videodata.find_many(
        where={
            "class_name": {"equals": class_name, "mode": "insensitive"},
            "footage_id": footage_id,
        }
    )


async def search_by_text_data(db, text_data, footage_id):
    return await db.videodata.find_many(
        where={
            "text_data": {"equals": text_data, "mode": "insensitive"},
            "footage_id": footage_id,
        }
    )
