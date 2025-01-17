import { List, Task } from "../db/models/associations.js";
import slugify from "slugify";

const listControllers = {
  createList: async (req, res) => {
    try {
      const data = req.body;

      const { dataValues: newList } = await List.create({
        user_id: data.userId,
        name: data.title,
        slug: slugify(data.title.toLowerCase()),
      });

      // console.log(newList);

      res.status(200).json(newList);
    } catch (error) {
      res.status(500).json({ error: "Failed to create list" });
    }
  },

  getList: async (req, res) => {
    try {
      const { id_list } = req.body;

      const list = await List.findByPk(id_list);

      res.status(200).json(list.dataValues);
    } catch (error) {
      res.status(500).json({ error: "Failed to find list" });
    }
  },

  getAllLists: async (req, res) => {
    try {
      const { id_user } = req.body;

      // console.log(id_user);

      const listsDB = await List.findAll({
        where: { user_id: id_user },
      });

      const lists = listsDB.map((list) => {
        return list.dataValues;
      });

      res.status(200).json(lists);
    } catch (error) {
      res.status(500).json({ error: "Failed to get all lists" });
    }
  },

  deleteList: async (req, res) => {
    try {
      const { listId } = req.body;

      const list = await List.findByPk(listId);

      await Task.destroy({ where: { list_id: listId } });

      await list.destroy();

      res.status(500).json({ message: "ok" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  createTask: async (req, res) => {
    try {
      const data = req.body;

      const task = await Task.create({
        list_id: data.listId,
        user_id: data.userId,
        name: data.taskName,
        description: data.taskDescription,
        status: data.taskStatus,
        priority: data.taskPriority,
      });

      // console.log(Number(task.dataValues.priority) + 1);

      const list = await List.findByPk(data.listId);

      switch (data.taskStatus) {
        case "1":
          await list.increment("open_tasks");
          break;
        case "2":
          await list.increment("inprogress_tasks");
          break;
        case "3":
          await list.increment("completed_tasks");
          break;
      }

      res.status(200).json({ messagge: "ok" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  },

  getTask: async (req, res) => {
    const { taskId, listId } = req.body;
    console.log(taskId);
    const taskDB = await Task.findOne({
      where: {
        id: taskId,
        list_id: listId,
      },
    });
    // console.log(taskDB);
    const task = taskDB.dataValues;

    res.status(200).json(task);
  },

  getListTasks: async (req, res) => {
    const { listId } = req.body;

    const tasksDB = await Task.findAll({
      where: {
        list_id: listId,
      },
    });

    const tasks = tasksDB.map((task) => {
      return task.dataValues;
    });

    // console.log(tasks);

    res.status(200).json(tasks);
  },

  delteTask: async (req, res) => {
    try {
      const data = req.body;

      const task = await Task.findOne({
        where: {
          id: data.taskId,
          list_id: data.listId,
        },
      });

      await task.destroy();

      res.status(200).json({ message: "ok" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

export default listControllers;
