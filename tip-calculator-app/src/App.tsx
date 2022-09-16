import { DataEntry } from "./components/DataEntry";
import { ResultBox } from "./components/ResultBox";
import { useForm, FormProvider } from "react-hook-form";

type FormInputs = {
  theBill: string;
  customTip: string;
  numOfPeople: string;
};

export const App = () => {
  //react-hook-forms-setup

  const methods = useForm<FormInputs>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div className="h-screen flex flex-col items-center md:justify-center md: font-mono-space">
        <h1 className="text-[#3D6666] text-[20px] mt-[40px] mb-[40px] md:mb-[60px] md:mt-0">
          S P L I
          <br />T T E R
        </h1>
        <form onChange={methods.handleSubmit(onSubmit)}>
          <div className="w-[375px] h-[789px] md:w-[920px] md:h-[481px] bg-white rounded-t-[20px] md:rounded-[25px] flex justify-around  items-center md:flex-row flex-col">
            <DataEntry />
            <ResultBox />
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
