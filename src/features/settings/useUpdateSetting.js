import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting updated successfully");
      queryClient.invalidateQueries(["settings"]);
    },
    onError: (error) => {
      toast.error("Error updating settings: " + error.message);
    },
  });

  return { isUpdating, updateSetting };
}
