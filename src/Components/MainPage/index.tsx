import React, { useState, useEffect, FormEvent } from "react";
import { format } from "date-fns";
import { MainBox, Title, Form, ScheduleList, ScheduleBox } from "./styles";
import api from "../../services/api";

interface Schedule {
  id?: string;
  description: string;
  date: Date;
}

const MainPage: React.FC = () => {
  const [schedule, setSchedule] = useState<Schedule>({
    description: "",
    date: new Date(),
  });
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const handleAddSchedule = async () => {
    const response = await api.post("/schedules", schedule);

    const newSchedule = response.data;

    setSchedules([...schedules, newSchedule]);

    setSchedule({ description: "", date: new Date() });
  };

  const handleListSchedule = async () => {
    const response = await api.get("/schedules");

    setSchedules(response.data);
  };

  const handleDeleteSchedule = async (id: string | undefined) => {
    const response = await api.delete(`/schedules/${id}`);

    if (response.status === 204) {
      const scheduleIndex = schedules.findIndex((element) => element.id === id);
      const auxList = [...schedules];

      auxList.splice(scheduleIndex, 1);

      setSchedules(auxList);
    }
  };

  const handleOnChange = (field: string, value: any) => {
    setSchedule({ ...schedule, [field]: value });
  };

  useEffect(() => {
    handleListSchedule();
  }, []);

  return (
    <>
      <MainBox>
        <Title> To-do list</Title>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (schedule.description !== "") {
              handleAddSchedule();
            } else {
              alert("Por favor, preencha a descrição da sua tarefa.");
            }
          }}
        >
          <input
            placeholder="Digite a descrição da sua tarefa"
            onChange={(e) => handleOnChange("description", e.target.value)}
            value={schedule.description}
          />
          <input
            type="datetime-local"
            placeholder="Digite a data da sua tarefa"
            onChange={(e) => handleOnChange("date", e.target.value)}
          />

          <p id="info">
            Caso você não escolha uma data, usaremos a data e o horário do
            momento
          </p>

          <button>Adicionar</button>
        </Form>

        <ScheduleList>
          {schedules.map((item: Schedule) => (
            <>
              <ScheduleBox key={item.id}>
                <div id="description">
                  <p>{item.description}</p>
                </div>
                <div id="date">
                  <button onClick={() => handleDeleteSchedule(item.id)}>
                    Deletar
                  </button>
                  {format(new Date(item.date), "dd/MM/yyyy H:m")}
                </div>
              </ScheduleBox>
            </>
          ))}
        </ScheduleList>
      </MainBox>
    </>
  );
};

export default MainPage;
